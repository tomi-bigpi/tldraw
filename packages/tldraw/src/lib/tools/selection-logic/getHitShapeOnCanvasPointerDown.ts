import { Editor, HIT_TEST_MARGIN, TLShape } from '@tldraw/editor'

export function getHitShapeOnCanvasPointerDown(editor: Editor): TLShape | undefined {
	const {
		zoomLevel,
		inputs: { currentPagePoint },
	} = editor

	return (
		// hovered shape at point
		editor.getShapeAtPoint(currentPagePoint, {
			hitInside: false,
			margin: HIT_TEST_MARGIN / zoomLevel,
		}) ??
		// selected shape at point
		editor.getSelectedShapeAtPoint(currentPagePoint)
	)
}
