import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../../context/AuthContext";

const withAuth = (Component, noPlaceholder) => {
  const Auth = (props) => {
    const router = useRouter();
    const { currentUser } = useAuthContext();

    useEffect(() => {
      if (!currentUser) router.push("/login?ref=" + router.asPath);
    }, [currentUser, router]);

    return currentUser ? (
      <Component {...props} />
    ) : !noPlaceholder ? (
      <div className="relative h-full w-full" style={{ minHeight: 600 }}>
        {/* <OverlayBoxGif /> */}
        <h1>Loading....</h1>
      </div>
    ) : (
      <></>
    );
  };

  return Auth;
};

export default withAuth;
