import { ValidRoles } from "../interfaces/valid-roles.interfaces";
import { applyDecorators, UseGuards } from "@nestjs/common";
import { RoleProtected } from "./role-protected.decorator";
import { UserRoleGuard } from "../guards/user-role.guard";function aplplyDecorators(arg0: any, arg1: any) {
    throw new Error("Function not implemented.");
}

import { AuthGuard } from "@nestjs/passport";

export function Auth(...roles:ValidRoles[]) {
    return applyDecorators(
        RoleProtected(...roles),
        UseGuards(AuthGuard('jwt'), UserRoleGuard)
    );
}

