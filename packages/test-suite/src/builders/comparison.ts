import { expressions as exp } from '3xpr'
import { TestSuiteRequest, IBuildTest } from 'h3lp'

export class ComparisonBuildTest implements IBuildTest {
	public build (): TestSuiteRequest {
		return {
			name: 'comparison',
			context: {
				a: '1',
				b: 2,
				c: { a: 4, b: 5 },
				d: 'house',
				e: 'car',
				f: '',
				g: null,
				devices: ['phone', 'computer', 'robot'],
				pi: 3.141516,
				requerid: false,
				device: 'phone',
				date: '2022-08-22',
				time: '22:14:30',
				dateTime: '1997-07-08T22:14:30.000Z'
			},
			cases: [{
				name: 'lab',
				func: (expression: any, context: any) => exp.eval(expression, context),
				tests: [
					'3>2',
					'a+b',
					'-3>2*2',
					'a*3==b+1',
					'a*3===b+1',
					'-4==-(2*2)',
					'4!=2*2',
					'4!==2*2',
					'4<>2*2',
					'c.a>b*2',
					'c.a>=b*2',
					'c.a<=b*2',
					'c.a<b*2',
					'd<e',
					'd>e',
					'd<>e',
					// 'c.a>=0?"positive":"negative"',
					// '2*(c.a==4?2:4)'
					'includes(devices,"phone")',
					'includes(devices,"other")',
					'contains(devices,"other")',
					'devices.contains("phone")',
					'devices.contains(device)',
					'["garage", "house","office"].contains(d)',
					'["garage", "house","office"].includes(d)',
					'in(device,devices)',
					'device.in(devices)',
					'in(2,[1,3,4])',
					'in(2,[1,2,3,4])',
					'd.in(["garage", "house","office"])',
					'd.in("garage", "house","office")',
					'between(12,10,20)',
					'between(2,10,20)',
					'between(pi,1,5)',
					'isNull(f)',
					'isNull(g)',
					'isNotNull(f)',
					'isNotNull(g)',
					'isBoolean(requerid)',
					'isNumber(pi)',
					'isDecimal(pi)',
					'isInteger(pi)',
					'isInteger(b)',
					'isString(b)',
					'isString(d)',
					'isDate(date)',
					'isDateTime(dateTime)',
					'isDateTime(time)',
					'isTime(time)',
					'isObject(c)',
					'isObject(device)',
					'isObject(devices)',
					'isArray(c)',
					'isArray(device)',
					'isArray(devices)',
					'isBooleanFormat(requerid)',
					'isNumberFormat(pi)',
					'isDecimalFormat(pi)',
					'isIntegerFormat(pi)',
					'isIntegerFormat(b)',
					'isDateFormat(date)',
					'isDateTimeFormat(dateTime)',
					'isDateTimeFormat(time)',
					'isTimeFormat(time)'
				]
			}]
		}
	}
}