export interface OptionsFetch {
    baseURL: string;
    headers?: Record<string, string>;
    params?: Record<string, string | unknown[]>;
}
export declare const useFetch: <T>(url: string, options?: OptionsFetch) => Promise<{
    data: T;
    response: {
        headers: Record<string, string | number>;
    };
}>;
