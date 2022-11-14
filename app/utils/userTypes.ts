const userTypes = ['normal', 'deliveryman', 'shop', 'admin']
type UserTypes = typeof userTypes[number]
export { userTypes, UserTypes}