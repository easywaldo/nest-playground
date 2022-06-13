export type CatType = {
    id: string;
    name: string;
    age: number;
    species: string;
    isCute: boolean;
    friends: string[];
}

export const Cat: CatType[] = [
    { id: 'cat-001', name: 'foo', age: 3, species: 'Russian Blue', isCute: true, friends:['cat-002', 'cat-003']},
    { id: 'cat-002', name: 'bar', age: 2, species: 'Russian Blue', isCute: true, friends:['cat-001', 'cat-003']},
    { id: 'cat-003', name: 'baz', age: 1, species: 'Russian Blue', isCute: true, friends:['cat-001', 'cat-002']},
]