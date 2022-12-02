import { format } from "date-fns";
import { useEffect } from "react";
import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const photoURL = user?.user?.photoURL;
        const date = new Date();

        if (email) {
            const person = {
                date: format(date, 'PP'),
                img: photoURL

            }
            fetch(`https://automed-machines-server.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(person)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token];
}

export default useToken;