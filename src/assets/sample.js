let data = [
    {
        id:crypto.randomUUID(),
        title:'Milk',
        category:'Grocery',
        amount:20,
        date : new Date().toDateString()
    },
    {
        id:crypto.randomUUID(),
        title:'Bread',
        category:'Grocery',
        amount:15,
        date : new Date().toDateString()
    },
    {
        id:crypto.randomUUID(),
        title:'Shirt',
        category:'Clothes',
        amount:50,
        date : new Date().toDateString()
    },
    {
        id:crypto.randomUUID(),
        title:'Pill',
        category:'Medicine',
        amount:10,
        date : new Date().toDateString()
    }
]

export default data;