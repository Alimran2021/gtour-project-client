import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://obscure-caverns-66602.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders])

    const deleteHandler = id => {
        console.log(id)
        const proceed = window.confirm('are you sure delete for item')
        if (proceed) {
            const url = `https://obscure-caverns-66602.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {

                        alert('this item has been successfull')
                        const result = orders.filter(order => order._id !== id)
                        setOrders(result)

                    }

                })
        }
    }
    return (
        <div className="my-14">
            <h1 className="text-center text-4xl mb-8">Hello manage orders</h1>
            {
                orders?.map(order => <div>
                    <div className="flex p-6 rounded justify-center items-center shadow-md w-96 mx-auto gap-4">
                        <div>
                            <h2>{order.name}</h2>
                            <h2>{order.title}</h2>
                            <p>{order.number}</p>
                            <p>{order.email}</p>
                        </div>
                        <div className="">
                            <button onClick={() => deleteHandler(order._id)}><i class="fas fa-trash-alt"></i></button>


                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;