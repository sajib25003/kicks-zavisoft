import { useDispatch } from "react-redux";
import { useGet } from "../custom-hooks/apiHooks";
import type { IPost } from "../types/types";
import { setPost } from "../redux/features/cardSlice";

const About = () => {
  const { data, isLoading } = useGet<IPost[]>(["posts"], "/posts");

  const dispatch = useDispatch();

  //   console.log("loaded data", data);
  const handleAdd = (post: IPost) => {
    console.log("Added post with id:", post.id);
    dispatch(setPost(post));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-4">All Posts</h2>
      <div className="grid grid-cols-4 gap-6">
        {data?.map((post) => (
          <div
            key={post.id}
            className="border px-3 py-2 rounded-lg bg-gray-900 flex flex-col justify-between shadow-lg shadow-gray-600"
          >
            <h3 className=" text-base text-emerald-200 font-semibold text-center">
              {post.title}
            </h3>
            <p className="text-xs italic text-justify">
              {" "}
              <span className="font-semibold text-amber-200">Details: </span>
              {post.body}
            </p>
            <div className="flex justify-center">
              <button
                className="btn btn-primary w-1/2 mb-1 mt-3 mx-auto py-1 px-2"
                onClick={() => handleAdd(post)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
