export interface IPAGE_INFO {
    name?: string,
    route?: string,
}
export interface IPAGEDATA_INFO {
    name?: string,
    title?: string,
    iconName?: string,
    iconNameEnterprise?: string,
    pages: IPAGE_INFO[]
}