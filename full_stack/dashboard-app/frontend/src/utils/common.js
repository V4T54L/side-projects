export function ConvertComponentsToHashmap(components){
    const res = {}
    for (const component of components) {
        res[component.id] = component.name
    }
    return res
}