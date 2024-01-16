import Loader from "@/components/common/Loader";
import useApi from "@/hooks/useApi";
import { apiPath } from "@/lib/api-path";
import { setOrder } from "@/redux/reducer/order";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

const Order: React.FC = () => {
  const { apiAction } = useApi();
  const dispatch = useDispatch();

  const {
    auth: { user, token },
    order: {
      order: { data },
    },
  } = useSelector((state: any) => state);

  const [currentPage, setCurrentPage] = useState(0);
  const [limit] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let orderData = await apiAction({
          method: "get",
          url: `${apiPath?.order?.getOrder}/${user?.id}`,
          headers: { Authorization: `Bearer ${token}` },
          params: {
            page: (currentPage + 1).toString(),
            pageSize: limit.toString(),
          },
        });
        orderData.data.responceData = flattenedArray(orderData.data.responceData);
        dispatch(setOrder(orderData));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  interface NestedObject {
    [key: string]: any;
  }
  
  const flattenObject = (obj: NestedObject, prefix = ''): NestedObject => {
    const result: NestedObject = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}_${key}` : key;
  
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          Object.assign(result, flattenObject(obj[key], newKey));
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  
    return result;
  };
  
  const flattenedArray = (arrayOfObjects: NestedObject[]) => {
    console.log(arrayOfObjects.map(obj => flattenObject(obj)), "arrayOfObjects.map(obj => flattenObject(obj))")
    return arrayOfObjects.map(obj => flattenObject(obj));
  };
  
  const displayedFields = {
    Id: "id",
    Price: "totalprice",
    OrderStatus: "orderstatus",
    Payment: "payment",
    Currency: "orderDetails_currency",
  };


  const getColorClass = (status: number): string => {
    switch (status) {
      case 0:
        return "text-red-500";
      case 1:
        return "text-yellow-500";
      case 2:
        return "text-green-500";
      default:
        return "text-gray-700";
    }
  };

  const statusText = (key: string, value: any) => {
    switch (key) {
      case "orderstatus":
        return orderStatusText(value);
      case "payment":
        return paymentStatusText(value);
      default:
        return value;
    }
  };

  const orderStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Order created";
      case 1:
        return "Order process";
      case 2:
        return "Delivered";
      default:
        return "Unknown status";
    }
  };

  const paymentStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "In process";
      case 2:
        return "Success";
      default:
        return "Unknown status";
    }
  };

  const renderHeaders = () => {
    const headers = Object.keys(displayedFields);
  
    return (
      <tr className="bg-gray-100">
        {headers.map((header) => (
          <th
            key={header}
            className="py-2 px-4 border-b border-gray-300 font-medium text-sm text-gray-700 text-left"
          >
            {header}
          </th>
        ))}
      </tr>
    );
  };
  
  const renderCells = () => {
    return data?.responceData.map((order: any) => (
      <tr key={order.id} className="border-b border-gray-300">
        {Object.entries(displayedFields).map(([key, value], index) => (
          <td
            key={index}
            className={`py-2 px-4 text-sm ${
              typeof order[value] === "number" ? getColorClass(order[value]) : ""
            }`}
          >
            {statusText(value, order[value])}
          </td>
        ))}
      </tr>
    ));
  };
  

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-16">
          <Loader />
        </div>
      ) : (
        <div className="">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>{renderHeaders()}</thead>
            <tbody>{renderCells()}</tbody>
          </table>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(data?.total / limit)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination mt-4"}
            activeClassName={"active"}
            forcePage={currentPage}  
          />
        </div>
      )}
    </>
  );
};

export default Order;
