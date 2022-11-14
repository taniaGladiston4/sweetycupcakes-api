const fileCategory = ['avatar', 'product'] as const
type FileCategory = typeof fileCategory[number]
export { fileCategory, FileCategory}