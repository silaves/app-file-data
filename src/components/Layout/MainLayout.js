import {Header} from "../Header/Header";

export const MainLayout = (props) => {
  const {children} = props;

  return (
    <>
      <Header>

      </Header>
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout;