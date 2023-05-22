import Heading from "../components/Heading"
import { useEffect } from "react";
import { useRouter } from "next/router";


const Error = () => {
    const router = useRouter();
  
    useEffect(() => {
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }, [router]);
  
    return (
      <div className='h-full flex justify-center items-center text-center'>
        <div>
          <Heading text="404" />
          <Heading tag="h2" text="Something is going wrong..." />
        </div>
      </div>
    )
  };
  
  export default Error;