// 封装callback工具
let promisify = (fn, receiver) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn.apply(receiver, [...args, (err, res) => {
                return err ? reject(err) : resolve(res);
            }]);
        })
    };
};

let ZipUnzipPromise = promisify(Zip.unzip, Zip);

try {
    let response = await ZipUnzipPromise({
        source: versions_target_path,
        destination: unzip_target_dir,
    });

    //解压成功
    //查找文件
    let androidJSPath = unzip_target_dir + 'bundle' + '/' + 'index.android.bundle';
    let iosJSPath = unzip_target_dir + 'jsbundle' + '/' + 'main.jsbundle';

