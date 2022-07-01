import userRoutes from "./user";

export default class AppRoutes {
  routers: any[] = [];
  constructor() {
    this.routers.push(userRoutes);
  }
}
