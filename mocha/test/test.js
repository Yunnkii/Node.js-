// var should = require('assert');
// var mocha  = require('mocha');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       should.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
var mocha = require('mocha');
describe("User",function (){
	describe("#save()",function (){
		it("should save without error",function (done){
			var user = new User('luna');
			user.save(function (err){
				if(err){
					done(err);
				} else {
					done();
				}
			})
		})
	})
})