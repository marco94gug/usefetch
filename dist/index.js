var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const useFetch = (url, options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        // Here we remove any undefined value into options.params to avoid ?value=undefined
        // into our request
        const params = (options === null || options === void 0 ? void 0 : options.params) &&
            Object.fromEntries(Object.entries(options.params).filter((value) => value[1] !== undefined && value[1] !== ""));
        const serializeSearchParams = params &&
            Object.entries(params)
                .map(([key, value]) => {
                if (Array.isArray(value)) {
                    const params = [];
                    for (let i = 0; i < value.length; i++) {
                        params.push(`${key + "[]"}=${value[i]}`);
                    }
                    return params.join("&");
                }
                return `${key}=${value}`;
            })
                .join("&");
        const searchParams = (options === null || options === void 0 ? void 0 : options.params) ? `?${serializeSearchParams}` : "";
        const res = yield fetch(`${options === null || options === void 0 ? void 0 : options.baseURL}/${url}${searchParams}`, {
            headers: Object.assign({ accept: "*/*", "content-type": (_b = (_a = options === null || options === void 0 ? void 0 : options.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "application/json" }, options === null || options === void 0 ? void 0 : options.headers),
        });
        const responseHeaders = {};
        // We collect all headers to the object
        for (let pair of res.headers.entries()) {
            responseHeaders[pair[0]] = pair[1];
        }
        const data = yield res.json();
        return { data, response: { headers: responseHeaders } };
    }
    catch (error) {
        throw error;
    }
});
