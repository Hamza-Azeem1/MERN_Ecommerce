import { useEffect, useState } from "react";
import SummaryApi from "../common";
import moment from 'moment';

const OrderPage = () => {

    const [data, setData] = useState([]);

    const fetchOrderDetails = async () => {
        try {
            const response = await fetch(SummaryApi.getOrder.url, {
                method: SummaryApi.getOrder.method,
                credentials: 'include'
            });

            const responseData = await response.json();

            if (Array.isArray(responseData.data)) {
                setData(responseData.data);
            } else {
                console.error('Response data.data is not an array:', responseData.data);
                setData([]);
            }
        } catch (error) {
            console.error('Error fetching order details:', error);
            setData([]); error
        }
    };

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    return (
        <div>
            {
                data.length === 0 ? (
                    <p>No Order Available!</p>
                ) : (
                    data.map((item, index) => (
                        <div key={item.userId + index}>
                            <p className="font-medium text-lg">{moment(item.createdAt).format('LL')}</p>
                            <div>
                                {
                                    item?.prodcuctDetails.map((product, index) => {
                                        return (
                                            <div>
                                                <img src={ } alt="" />

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default OrderPage;
