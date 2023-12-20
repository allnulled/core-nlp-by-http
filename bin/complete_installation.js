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
        Step_0_dependencies: {
            if (fs.existsSync(node_modules_folder)) {
                break Step_0_dependencies;
            }
            was_needed_some_step = true;
            console.log("[*] ----------------------------------- [*]");
            console.log("[*] Executing installation dependencies with: " + cmd0.replace(/  +/g, "\n  "));
            console.log("[*] ----------------------------------- [*]\n\n\n\n\n");
            child_process.execSync(cmd0, {
                cwd: __dirname + "/..",
                stdio: [process.stdin, process.stdout, process.stderr]
            });
            console.log("\n\n\n\n\n[*] -----------------------------------");
            console.log("[✔] Dependencies were downloaded downloaded successfully.");
        }
        const download = require("download");
        const decompress = require("decompress");
        Step_1_download: {
            if (fs.existsSync(file_dst_path)) {
                break Step_1_download;
            }
            console.log("[*] ----------------------------------- [*]");
            console.log("[*] Executing download.");
            console.log("[*] This operation takes some time, please, be patient...");
            console.log("[*] ----------------------------------- [*]\n\n\n\n\n");
            await download(file_src_url, path.dirname(file_dst_path));
            console.log("\n\n\n\n\n[*] -----------------------------------");
            console.log("[✔] The remote file was downloaded successfully.");
        }
        Step_2_decompression: {
            console.log("[*] ----------------------------------- [*]");
            console.log("[*] Executing decompression.");
            console.log("[*] ----------------------------------- [*]\n\n\n\n\n");
            await decompress(file_dst_path, file_dst_folder);
            console.log("\n\n\n\n\n[*] -----------------------------------");
            console.log("[✔] The remote file was decompressed successfully.");
        }
        Step_3_copy: {
            const intermediate_folder = fs.readdirSync(__dirname + "/complete_installation/stanford-parser-4.2.1")[0];
            const file_dst_path_copy_src = path.resolve(__dirname + "/complete_installation/stanford-parser-4.2.1/" + intermediate_folder + "/stanford-parser-4.2.1-models.jar");
            const file_dst_path_copy_dst = path.resolve(__dirname + "/../node_modules/core-nlp-wrapper/stanford-parser-4.2.1-models.jar");
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

module.exports = main();