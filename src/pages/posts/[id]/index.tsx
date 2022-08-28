import { Header } from "src/components/Header";
import { usePost } from "src/hooks/usePost";
import { Post } from "../../../components/post";

const PostsId = () => {
  const { post, user, error, isLoading } = usePost();

  console.log({ post, user, error, isLoading });

  return (
    <div>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
