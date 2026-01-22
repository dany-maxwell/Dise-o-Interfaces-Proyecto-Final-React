import { useAuth } from "../../context/AuthContext"

import PublicHeader from '../../components/Header/Header'

const Profile = () => {
  const { profile } = useAuth()
  if (!profile) return null

  return (
    <>
        <PublicHeader />
      <h2>{profile.username}</h2>
      <p>{profile.email}</p>
      <p>{profile.country}</p>
    </>
  )
}

export default Profile