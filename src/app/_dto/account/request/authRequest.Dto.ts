import { RequestBaseDto } from "../../requestBaseDto";
/**
 *
 *
 * @export
 * @interface AuthRequestDto
 * @extends {RequestBaseDto}
 */
export interface AuthRequestDto extends RequestBaseDto {
    client_id?: string;
    client_secret?: string;
    scope?: string;
    grant_type?: string;
    username?: string;
    password?: string;
}