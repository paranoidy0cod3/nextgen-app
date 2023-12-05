import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import Profile from '@components/Profile';

const MyProfile = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`)
            const data = await response.json()
            setPosts(data)
        }
        if( session?.user.id ) fetchPosts()
    },[data])
    

    const handleEdit = () => {}
    const handleDelete = () => {}


    return (
        <Profile 
            name='John Doe'
            desc='Lorem ipsum dolor sit amet'
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile