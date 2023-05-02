export function route(url, query = {}) {
    query = Object.keys(query).length ? '?' + new URLSearchParams(query).toString() : '';

    return url + query;
}

export function __(text, replacements = {}) {
    for (let [key, value] of Object.entries(replacements)) {
        text = text.replace(':' + key, value);
    }

    return text;
}
