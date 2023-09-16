import { observe } from "./observer/index";

export function initState(vm) {
  const opts = vm.$options;
  if (opts.props) {
    initProps(vm);
  }
  if (opts.data) {
    initData(vm);
  }
  if (opts.methods) {
    initMethods(vm);
  }
  if (opts.computed) {
    initComputed(vm);
  }
  if (opts.watch) {
    initWatch(vm);
  }
}
function initProps() {}

function initData(vm) {
  let data = vm.$options.data;

  // data可能是一个函数，也可能是一个对象
  // 如果是函数的话要拿到返回值，对象的话就不用处理
  data = typeof data === "function" ? data.call(vm) : data;

  // 对数据进行观测
  observe(data);
}

function initMethods() {}
function initComputed() {}
function initWatch() {}