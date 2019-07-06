// Type definitions for bootstrap-tour v0.12.0
// Project: https://github.com/parxal/bootstrap-tour
// Definitions by: Ivan Valadares https://github.com/parxal/bootstrap-tour/bootstrap-tour.d.ts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
	* @class
	* Creates an instance of a Tour
*/
declare class Tour {
	constructor();
	constructor(options: Tour.Options);

	/**
		* Add a new step
		*/
	addSteps(steps: Tour.Step): void;
	/**
		* Add multiple step
		*/
	addSteps(steps: Tour.Step[]): void;

	/**
		* Get step by its indice
		* 
		* @param {number} i
		* @return {Tour.Step}
		*/
	getStep(i: number): Tour.Step;

	/**
		* Setup event bindings and continue a tour that has already started
		*/
	init(): void;
	/**
		* Setup event bindings and continue a tour that has already started forcefully
		* 
		* @param {boolean} [force]
		*/
	init(force: boolean): void;

	/**
		* Start tour from current step
		*/
	start(): void;
	/**
		* Start tour from current step forcefully
		* 
		* @param {boolean} [force]
		*/
	start(force?: boolean): void;

	/**
		* Hide current step and show next step
		*/
	next(): void;

	/**
		* Hide current step and show prev step
		*/
	prev(): void;

	/**
		* Hide current step and go to step by indice
		* 
		* @param {number} i
		*/
	goTo(i: number): void;

	/**
		* End tour
		*/
	end(): void;

	/**
		* Verify if tour is enabled
		*/
	ended(): void;

	/**
		* Restart tour
		*/
	restart(): void;

	/**
		* Pause step timer
		*/
	pause(): Tour.Step;

	/**
		* Resume step timer
		*/
	resume(): Tour.Step;

	/**
		* Hide the specified step
		* 
		* @param {number} i - indice of step to hide
		*/
	hideStep(i: number): void;
	/**
		* Hide the specified step
		* 
		* @param {number} i - indice of step to hide
		* @param {number} [iNext]
		*/
	hideStep(i: number, iNext: number): void;

	/**
		* Show the specified step
		* 
		* @param {number} i - indice of step to show
		*/
	showStep(i: number): void;

	/**
		* Return step tour is currently showing
		* 
		* @return {Tour.Step}
		*/
	getCurrentStep(): Tour.Step;

	/**
		* Setup current step variable
		*/
	setCurrentStep(): void;
	/**
		* Setup current step variable
		* 
		* @param {Tour.Step} value - Step to show
		*/
	setCurrentStep(value: Tour.Step): void;

	/**
		* Manually trigger a redraw on the overlay element
		*/
	redraw(): void;

	/**
		* @member {JQuery[]}
		*/
	backdrops: JQuery[];
}

declare namespace Tour {
	/**
		* @typedef {function} Event
		*/
	type Event = (tour: Tour) => void;
	/**
		* @typedef {function} StateEvent
		*/
	type StateEvent = (key: string, value: string | number) => void;
	/**
		* @typedef {function} SuspendEvent
		*/
	type SuspendEvent = (tour: Tour, duration: number) => void;
	/**
		* @typedef {function} Template
		*/
	type Template = string | {(step: Tour.Step, i: number): string};
	/**
		* @typedef {number|object} BackDropPadding
		*/
	type BackDropPadding = number | {
		top?: number;
		right?: number;
		bottom?: number;
		left?: number;
	};
		
	/**
		* Options to be passed to the Tour class constructor
		* @typedef {object} Options
		*/
	export interface Options {
		name?: string;
		steps?: Step[];
		container?: string;
		smartPlacement?: boolean;
		autoscroll?: boolean;
		keyboard?: boolean;
		storage?: boolean | WindowLocalStorage | WindowSessionStorage | {};
		debug?: boolean;
		template?: Template;
		backdrop?: boolean;
		backdropContainer?: string;
		backdropPadding?: BackDropPadding;
		redirect?: boolean | Function;
		orphan?: boolean | string | Function;
		duration?: boolean | number;
		delay?: boolean | number;
		basePath?: string;
		afterGetState?: StateEvent;
		afterSetState?: StateEvent;
		afterRemoveState?: StateEvent;
		onStart?: Event;
		onEnd?: Event;
		onShow?: Event;
		onShown?: Event;
		onHide?: Event;
		onHidden?: Event;
		onNext?: Event;
		onPrev?: Event;
		onPause?: SuspendEvent;
		onResume?: SuspendEvent;
		onRedirectError?: Event;
	}
	
	/**
		* A step belonging to a tour.
		* @typedef {object} Step
		*/
	export interface Step  {
		path?: string | RegExp;
		host?: string | RegExp;
		element?: string;
		placement?: string | {(): string};
		smartPlacement?: boolean;
		title?: string | {(): string};
		content?: string | {(): string};
		next?: number;
		prev?: number;
		animation?: boolean;
		container?: string;
		template?: Template;
		backdrop?: boolean;
		backdropContainer?: string;
		backdropPadding?: BackDropPadding;
		redirect?: boolean | {(): void};
		reflex?: boolean | string;
		orphan?: boolean | string | {(): string};
		duration?: boolean | string;
		onShow?: Event;
		onShown?: Event;
		onHide?: Event;
		onHidden?: Event;
		onNext?: Event;
		onPrev?: Event;
		onPause?: SuspendEvent;
		onResume?: SuspendEvent;
		onRedirectError?: Event;
	}
}