import axios from 'axios';
import React, { useState, useEffect } from 'react';

const url = 'http://localhost:8086/api/orders/10249';


const ProductList = () => {
    let [orders, setorders] = useState([]);

    useEffect(() => {
        axios
            .get(url, { headers: { Accept: 'application/json' } })
            .then((resp) => resp.data) // response body is accessed via resp.data
            .then(setorders);
    }, []);



    console.log(orders.employeeDto)




    return (
        <>
        
            <h3>Here is the list of all Orders</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Required Date</th>
                        <th>Shipped Date</th>
                        <th>Ship Name</th>
                    </tr>

                </thead>

                <tbody>

                    <tr key={orders.orderId}>
                        <td>{orders.orderId}</td>
                        <td>{orders.orderDate}</td>
                        <td>{orders.requiredDate}</td>
                        <td>{orders.shippedDate}</td>
                        <td>{orders.shipName}</td>
                    </tr>

                </tbody>

                <br></br>

                <thead>
                    <tr>

                        <th>Ship Address</th>
                        <th>Ship City</th>
                        <th>Ship Region</th>
                        <th>Ship Postal Code</th>
                        <th>Ship Country</th>

                    </tr>
                </thead>

                <tbody>
                    <tr key={orders.orderId}>
                        <td>{orders.shipAddress}</td>
                        <td>{orders.shipCity}</td>
                        <td>{orders.shipRegion}</td>
                        <td>{orders.shipPostalCode}</td>
                        <td>{orders.shipCountry}</td>
                    </tr>
                </tbody>
            </table>

            {/* Employee details --------------------------------------------------*/}
            <h3>Here is Employee Details</h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Title</th>
                        <th>birthDate</th>
                    </tr>

                </thead>

                <tbody>

                    {orders.employeeDto && <tr>
                        <td>{orders.employeeDto.employeeId}</td>
                        <td>{orders.employeeDto.firstName}</td>
                        <td>{orders.employeeDto.lastName}</td>
                        <td>{orders.employeeDto.title}</td>
                        <td>{orders.employeeDto.birthDate}</td>
                    </tr>
                    }
                </tbody>

                <br></br>

                <thead>
                    <tr>

                        <th>Hire Date</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Region</th>
                        <th>Country</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{orders.employeeDto?.hireDate}</td>
                        <td>{orders.employeeDto?.address}</td>
                        <td>{orders.employeeDto?.city}</td>
                        <td>{orders.employeeDto?.region}</td>
                        <td>{orders.employeeDto?.country}</td>
                    </tr>
                </tbody>
            </table>


            {/* Order details */}

            <h3>Here is Order Details </h3>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Discount</th>
                    </tr>

                </thead>

                <tbody>
                    {/* <tr key={orders.orderId}>
                        <td>{orders.orderDetails.orderId}</td>
                        <td>{orders.employeeDto.unitPrice}</td>
                        <td>{orders.employeeDto.quantity}</td>
                        <td>{orders.employeeDto.discount}</td>
                        
                    </tr>   */}

                </tbody>


            </table>


        </>
    );
};

export default ProductList;