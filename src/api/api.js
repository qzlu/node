/**   
 * api接口统一管理
 */
import { get, post } from './http';
export const index=p=>post('/b',p);
export const postExample=p=>post("/example/example/post",p);
export const getExample=()=>get("/example/example/get")
export const getUsers=()=>get("/users");
export const uploadFile=p=>post('/upload',p);
