export interface OptionsFetch {
  baseURL: string;
  headers?: Record<string, string>;
  params?: Record<string, string | unknown[]>;
}

export const useFetch = async <T>(url: string, options?: OptionsFetch) => {
  try {
    // Here we remove any undefined value into options.params to avoid ?value=undefined
    // into our request
    const params =
      options?.params &&
      Object.fromEntries(
        Object.entries(options.params).filter(
          (value) => value[1] !== undefined && value[1] !== ""
        )
      );

    const serializeSearchParams =
      params &&
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

    const searchParams = options?.params ? `?${serializeSearchParams}` : "";

    const res = await fetch(`${options?.baseURL}/${url}${searchParams}`, {
      headers: {
        accept: "*/*",
        "content-type":
          options?.headers?.["content-type"] ?? "application/json",
        ...options?.headers,
      },
    });

    const responseHeaders: Record<string, string> = {};

    // We collect all headers to the object
    for (let pair of res.headers.entries()) {
      responseHeaders[pair[0]] = pair[1];
    }

    const data = await res.json();

    return { data, response: { headers: responseHeaders } } as {
      data: T;
      response: { headers: Record<string, string | number> };
    };
  } catch (error) {
    throw error;
  }
};
