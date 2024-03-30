import express from 'express'
import LogModel from "../model/log.model"
import Logger from "../service/logger"
import moment from 'moment'
import UserModel from '../model/user.model'
import AccessModel from '../model/access.model'
import Resource from '../enum/resources.enum'
import Action from '../enum/action.enum'
import RoleModel from '../model/role.model'

export default class AccessLogMiddleware {

	static log(req: express.Request, res: express.Response) {
		const logger = new Logger()
		const log_model = new LogModel()

		log_model.setIp('http://127.0.0.1')
		log_model.setMethod(req.method)
		log_model.setUrl(req.originalUrl)
		log_model.setEndpoint(req.url)
		log_model.setHeader(req.headers)
		log_model.setRequest_body(JSON.stringify(req.body))
		log_model.setTimestamp(moment().format())

		log_model.setUser(this.user(req))
		log_model.setAccess(this.access(req))


		logger.accesslLog().info(log_model)
	}

	static user(req: express.Request) {
		const user_model = new UserModel()
		const role_model = new RoleModel
		const authorization = req.headers.authorization


		if (!authorization) {
			role_model.setName('auth')
			user_model.setRole(role_model)
			
			return user_model
		}

		
		




		return user_model
	}

	static access(req: express.Request): AccessModel {
		const access_model = new AccessModel()

		const raw_url = req.url
		const api_version = raw_url.split("/")[1]
		const resource = raw_url.split("/")[2]
		const action = raw_url.split("/")[3]

		access_model.setApi_version(api_version)
		access_model.setAction(this.get_action(action))
		access_model.setResource(this.get_resource(resource))

		return access_model
	}

	static get_action(e: string): any {
		if (e === "index") return Action.INDEX
		else if (e === "create") return Action.CREATE
		else if (e === "show") return Action.SHOW
		else if (e === "edit") return Action.EDIT
		else if (e === "delete") return Action.DELETE
		else if (e === "reset") return Action.RESET
		else if (e === "freeze") return Action.FREEZE
		else if (e === "generate") return Action.GENERATE
		else if (e === "verify") return Action.VERIFY
		else if (e === "login") return Action.LOGIN
		else if (e === "logout") return Action.LOGOUT
		else if (e === "ping") return Action.PING
		else return Action.NONE
	}
	static get_resource(a: string): any {
		if (a === "auth") return Resource.AUTH
		else if (a === "user") return Resource.USER
		else if (a === "otp") return Resource.OTP
		else if (a === "keuangan") return Resource.KEUANGAN
		else if (a === "kurikulum") return Resource.KURIKULUM
		else if (a === "laporan") return Resource.LAPORAN
		else if (a === "jurnal") return Resource.JURNAL
		else if (a === "penilaian") return Resource.PENILAIAN
		else if (a === "cuti") return Resource.CUTI
		else if (a === "jadwal") return Resource.JADWAL
		else if (a === "khs") return Resource.KHS
		else if (a === "krs") return Resource.KRS
		else if (a === "nilai") return Resource.NILAI
		else if (a === "pembayaran") return Resource.PEMBAYARAN
		else if (a === "tugas") return Resource.WISUDA
		else if (a === "notifikasi") return Resource.NOTIFIKASI
		else if (a === "util") return Resource.UTIL
		else return Resource.NONE
	}
}