import { useRouteError } from "react-router-dom"

export const ErrorPage: React.FC = () => {
  const error: any = useRouteError()
  console.error(error);
  return (
    <div>
      <div>
        当前页面出现问题
        <i>{error.statusText}</i>
        <i>{error.message}</i>
      </div> 
    </div>
  )
}