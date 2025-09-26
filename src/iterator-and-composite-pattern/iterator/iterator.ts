// The Iterator interface declares the operations required for traversing a collection.
export interface CustomIterator<T> {
    hasNext(): boolean;
    next(): T;
}