import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps, UsersProp } from "@/interfaces";

const Users:React.FC<UsersProp> = ({users}) => {
    return(
        <div>
            <Header />
            <h1>users</h1>
            <div className="grid grid-cols-3 gap-2 ">
            {
                users?.map(({ id,name, username, email, address, phone, website, company  }: UserProps, key: number) => (
                <UserCard name={name} username={username} email={email} phone={phone} website={website} company={company} address={address} id={id} key={key} />
                ))
            }
            </div>
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