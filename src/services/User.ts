import { ErrorProps, PageProps } from "../types";
import { api } from "./api";

class User {
  // O manual está disponível em: https://api.stackexchange.com/docs
  async getUsersByPage(
    page: number,
    fromdate: number,
    todate: number
  ): Promise<PageProps | ErrorProps> {
    const params = {
      order: "desc",
      site: "stackoverflow",
      sort: process.env.REACT_APP_PAGE_SORT,
      fromdate,
      todate,
      page,
      pagesize: process.env.REACT_APP_PAGE_SIZE,
    };

    try {
      const { data } = await api.get("/", { params });
      return data;
    } catch (error: any) {
      return { message: error.message };
    }
  }
}

const user = new User();
export default user;
