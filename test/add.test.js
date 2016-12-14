import add from '../src/add.js';
import mult from '../src/mult.js';
import chai from 'chai';
let expect = chai.expect;

describe("加法测试",function(){
	it('1+1',function(done){
		expect(add(1,1)).to.be.equal(2);
		done();
	});
	it('1+6',function(done){
		expect(add(1,6)).to.be.equal(7);
		done();
	});
});

describe("乘法测试",function(){
	it('4*4',function(done){
		expect(mult(4,4)).to.be.equal(16);
		done();
	});
});




/*

Mocha默认运行test子目录所有的测试脚本
mocha --recursive;

mocha --watch参数用来监视指定的测试脚本

mocha -bail参数指定只要有一个测试用例没有通过，就停止执行后面的测试用例





// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);


*/