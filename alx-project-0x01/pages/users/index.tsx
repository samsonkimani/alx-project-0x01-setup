import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UsersProp } from "@/interfaces";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users:React.FC<UsersProp> = ({users}) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)

  const handleAddUser = (newUser: UserData) => {
    setUser({...newUser, id: users.length + 1 } )
  };

    return(
        <div>
            <Header />
            <h1>users</h1>

            <button onClick={() => setModalOpen(true)}>Add user</button>
            <div className="grid grid-cols-3 gap-2 ">
            {
                users?.map(({ id,name, username, email, address, phone, website, company  }: UserProps, key: number) => (
                <UserCard name={name} username={username} email={email} phone={phone} website={website} company={company} address={address} id={id} key={key} />
                ))
            }
            </div>

            {isModalOpen && (
              <UserModal onClose={() => setModalOpen(false) }  onSubmit={handleAddUser}/>
            )}
        </div>
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;