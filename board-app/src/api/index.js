import axios from 'axios'

const instance = axios.create({
	//baseURL: 'http://localhost:8090/',
	//baseURL: 'http://20.196.147.98:8090/',
	//baseURL: '/api',
	baseURL: 'http://asp01-f4hvd6dccpbpawhr.koreacentral-01.azurewebsites.net',
})

instance.defaults.headers.post['Content-Type'] =
	'application/json;charset=utf-8'
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

/**
 * 게시글 목록 조회
 * @param {*} params
 */
function getBoardListAPI(params) {
	return instance.get('/board/list', params)
	//return instance.get('/board/list', { params })  // 🔧 이렇게 수정
}

/**
 * 게시글 상세 조회
 * @param {*} params
 */
function getBoardDetailAPI(params) {
	return instance.get('/board/detail', params)
}

/**
 * 게시글 작성
 * @param {*} params
 */
function insertBoardAPI(params) {
	return instance.post('/board/insert', null, params)
}

/**
 * 게시글 수정
 * @param {*} params
 */
function updateBoardAPI(params) {
	return instance.post('/board/update', null, params)
}

/**
 * 게시글 삭제
 * @param {*} params
 */
function deleteBoardAPI(params) {
	return instance.post('/board/delete', null, params)
}

/**
 * 댓글 작성
 * @param {*} params
 */
function insertReplyAPI(params) {
	return instance.post('/board/reply/insert', null, params)
}

/**
 * 댓글 조회
 * @param {*} params
 */
function getReplyListAPI(params) {
	return instance.get('/board/reply/list', params)
}

/**
 * 댓글 수정
 * @param {*} params
 */
function updateReplyAPI(params) {
	return instance.post('/board/reply/update', null, params)
}

/**
 * 댓글 삭제
 * @param {*} params
 */
function deleteReplyAPI(params) {
	return instance.post('/board/reply/delete', null, params)
}

export {
	getBoardListAPI,
	getBoardDetailAPI,
	insertBoardAPI,
	updateBoardAPI,
	deleteBoardAPI,
	insertReplyAPI,
	getReplyListAPI,
	updateReplyAPI,
	deleteReplyAPI,
}
