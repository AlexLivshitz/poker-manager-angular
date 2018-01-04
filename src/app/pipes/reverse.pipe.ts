

import { Pipe } from "@angular/core";

@Pipe({
	name: 'reverse',
	pure: false
})
export class ReversePipe {
	private isReversed: boolean = false;

	transform (values: Array<any>): Array<any> {
		if (values) {
			// if(!this.isReversed) {
				this.isReversed = true;
				return values.reverse();
			// } else {
			// 	return values;
			// }
		}
	}
}