let required = (propertyType) =>{
    return v => V && v.length > 0 || 'Input ${$propertyType}'


}

let minLength = (propertyType,minLength) =>{
    return v => V && v.length >= minlength || '$(propertyType) debe ser de al menos $(minlength)'

}
let maxLength = (propertyType,maxLength) =>{
    return v => V && v.length <= maxLength || '$(propertyType) debe tener menos de $(maxLength)'

}
export default {
    required,
    minLength,
    maxLength,


}