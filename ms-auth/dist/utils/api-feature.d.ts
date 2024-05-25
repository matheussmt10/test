export declare class ApiFeatures {
    query: any;
    queryString: any;
    constructor(query: any, queryString: any);
    filter(): this;
    sort(): this;
    limit(): this;
    pagination(): this;
}
