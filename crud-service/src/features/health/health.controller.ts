import { Request, Response } from "express";
import { SuccessOk } from "../../shared/response/success/success.response";


class HealthCheckController {
    getHealth = (request: Request, response: Response): void => {
      SuccessOk(response, { status: "healthy" });
    };
  }
  
  export { HealthCheckController };