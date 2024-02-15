import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiGetMe } from "../services/authService";
import { ErrorCommonAxios } from "../axios/ErrorCommonAxios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice/AuthSlice";
import Cookies from "universal-cookie";

const cookies = new Cookies()

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  console.log('userr: '+JSON.stringify(user))

  const handleLogout = () => {
    cookies.remove('access_token')
    dispatch(removeUser())
    navigate('/home')
  }

  return (
    <header style={{position: "fixed", width: "100%"}} className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold">
            Fashion Store
          </a>
        </div>
        <nav>
          <ul className="flex items-center space-x-6">
            <Link
              to="/home"
            >
                Home
            </Link>
            <Link
              to="/products"
            >
                Products
            </Link>
            <Link
              to="/cart"
            >
                Cart
            </Link>
            {
              user['email'] == null ?<>
                  <Link
                    to="/login"
                  >
                      Login
                  </Link>
                  <Link
                    to="/register"
                  >
                      Register
                  </Link>
                </>
              : <>
                <div>Hello {user['name']}</div>
                <Link
                    onClick={() => handleLogout()}
                >
                    Logout
                </Link>
                <div style={{ width: '50px' }}>
                  <Link to={`/profile`}>
                    {user['avatarUrl'] ? (
                      <img style={{borderRadius: '50%'}} className="bg-blue-500 w-10 h-10 flex justify-center items-center" alt='' src={user['avatarUrl']} />
                    ) : (
                      <div style={{borderRadius: '50%'}} className="bg-blue-500 w-10 h-10 flex justify-center items-center">{user['name'][0]?.toUpperCase()}</div>
                    )}
                  </Link>
                </div>
              </>
            }
          </ul>
        </nav>
      </div>
    </header>
  );
}
