import { useParams } from "react-router-dom";
import { useGet } from "../custom-hooks/apiHooks";
import { IProduct } from "../types/types";

const ViewProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGet<IProduct>(
    ["product", `${id}`],
    `/products/${id}`,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4.5 lg:mx-15 my-5 md:my-8 border text-black">{`View Product with ID: ${product?.title}`}</div>
  );
};

export default ViewProduct;
