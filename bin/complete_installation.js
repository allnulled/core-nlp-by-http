const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const node_modules_folder = path.resolve(__dirname + "/../node_modules");
const file_dst_path = __dirname + "/complete_installation/stanford-parser-4.2.1.zip";
const file_dst_folder = __dirname + "/complete_installation/stanford-parser-4.2.1";
const file_src_url = "http://nlp.stanford.edu/software/stanford-parser-4.2.1.zip";
const main = async function() {
    try {
        let was_needed_some_step = false;
        const cmd0 = `npm i`;
        const cmd1 = `curl  -LO  -o ${JSON.stringify(file_dst_path)}  ${JSON.stringify(file_src_url)}`;
        const cmd2 = `7z  x  ${file_dst_path}  -o${JSON.stringify(file_dst_folder)}  -y`;
        Step_0_dependencies: {
            if (fs.existsSync(node_modules_folder)) {
                break Step_0_dependencies;
            }
            was_needed_some_step = true;
            console.log("[*] Executing:\n  " + cmd0.replace(/  +/g, "\n  "));
            console.log("[*] ----------------------------------- [*]\n\n\n\n\n");
            child_process.execSync(cmd0, {
                cwd: __dirname + "/..",
                stdio: [process.stdin, process.stdout, process.stderr]
            });
            console.log("\n\n\n\n\n[*] -----------------------------------");
            console.log("[✔] Dependencies were downloaded downloaded successfully.");
        }
        Step_1_download: {
            if (fs.existsSync(file_dst_path)) {
                break Step_1_download;
            }
            was_needed_some_step = true;
            console.log("[*] Executing:\n  " + cmd1.replace(/  +/g, "\n  "));
            console.log("[*] ----------------------------------- [*]\n\n\n\n\n");
            child_process.execSync(cmd1, {
                cwd: __dirname + "/complete_installation",
                stdio: [process.stdin, process.stdout, process.stderr]
            });
            console.log("\n\n\n\n\n[*] -----------------------------------");
            console.log("[✔] The remote file was downloaded successfully.");
        }
        Step_2_decompression: {
            if (fs.readdirSync(file_dst_folder).length) {
                break Step_2_decompression;
            }
            was_needed_some_step = true;
            console.log("[*] Executing:\n  " + cmd2.replace(/  +/g, "\n  "));
            console.log("[*] ----------------------------------- [*]\n\n\n\n\n");
            child_process.execSync(cmd2, {
                cwd: __dirname + "/complete_installation",
                stdio: [process.stdin, process.stdout, process.stderr]
            });
            console.log("\n\n\n\n\n[*] -----------------------------------");
            console.log("[✔] The remote file was decompressed successfully.");
        }
        Step_3_copy: {
            const intermediate_folder = fs.readdirSync(__dirname + "/complete_installation/stanford-parser-4.2.1")[0];
            const file_dst_path_copy_src = path.resolve(__dirname + "/complete_installation/stanford-parser-4.2.1/" + intermediate_folder + "/stanford-parser-4.2.1-models.jar");
            const file_dst_path_copy_dst = path.resolve(__dirname + "/../node_modules/core-nlp-wrapper/stanford-parser-4.2.1-models.jar");
            if (fs.existsSync(file_dst_path_copy_dst)) {
                break Step_3_copy;
            }
            was_needed_some_step = true;
            console.log("[*] Copying file:\n  --from " + file_dst_path_copy_src + "\n  --to   " + file_dst_path_copy_dst);
            fs.copyFileSync(file_dst_path_copy_src, file_dst_path_copy_dst);
            console.log("[✔] File was patched successfully.");
        }
        if (was_needed_some_step) {
            console.log("[✔] Installation completed successfully.");
        }
    } catch (error) {
        console.log(`[✗] There were errors on «complete_installation». Remember you need to have installed on command line both «curl» and «7z» to be able to execute this command. Otherwise, you can download the file on «${file_src_url}», decompress it and copy-paste the file «xxx» manually by yourself, so you don't need to run this script anymore.`);
        console.log(error);
    }
};

main();