# 0.

```js
const obj = {
  a: 1,
  c() {
    return () => console.log(this.a + 1);
  },
};
const f = obj.c();
f();
```

Output - 2

# 1.

```js
const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
    return () => {
      console.log(this.a);
    };
  },
};
const c = obj.b;
c()();
const d = obj.b();
d();
```

- Output - undefined,undefined,1,1

# 2.

```js
const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
    return () => console.log(this.a);
  },
};
const c = obj.b;
c()();

const d = obj.b;
const e = d();
e();

const f = obj.b();
f();
```

- Output - undefined,undfined,undefined,undefined,1,1

# 3.

```js
const obj = {
  a: 1,
  b: this.a + 1,
  c: () => {
    return this.a + 1;
  },
  d() {
    return this.a + 1;
  },
  e() {
    return (() => this.a + 1)();
  },
};
console.log(obj.b);
console.log(obj.c());
console.log(obj.d());
console.log(obj.e());
```

Output - NaN,NaN,2,2

# 4.

```js
let a = 10;
const obj = {
  a: 1,
  e: (() => {
    console.log(this.a);
  })(),
};
obj.e();
```

Output - undefined , error .
