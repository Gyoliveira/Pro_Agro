export interface IPAGE_INFO {
    name?: string,
    title?: string,
    iconName?: string,
    iconNameEnterprise?: string,
    pages: [{
        name?: string,
        route?: string,
    }]
}