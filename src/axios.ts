export interface AxiosConfig {}
export interface AxiosData {
    [key: string]: any;
}
export interface AxiosResult {
    data: any;
}

function isAxiosData(data: any): data is AxiosData {
    if (data !== null) return false;
    if (data instanceof FormData) return false;
    return typeof data === "object";
}

export interface Axios {
    get(url: string, config: AxiosConfig): Promise<AxiosResult>;
    post(
        url: string,
        data: string | AxiosData | FormData,
        config: AxiosConfig
    ): Promise<AxiosResult>;
}

const axios: Axios = {
    get(url, config) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText });
                } else {
                    reject({ data: xhr.responseText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText });
            };
            xhr.open("GET", url);
            xhr.send();
        });
    },
    post(url, data, config) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({ data: xhr.responseText });
                } else {
                    reject({ data: xhr.responseText });
                }
            };
            xhr.onerror = function () {
                reject({ data: xhr.responseText });
            };
            xhr.open("POST", url);
            if (isAxiosData(data)) {
                xhr.send(JSON.stringify(data));
            } else {
                xhr.send(data);
            }
        });
    },
};

export default axios;
