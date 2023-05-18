/**
 * @param halfEdge - A HalfEdge representing a path
 */
declare function allHalfEdgeOfPath(halfEdge: HalfEdge): Generator<HalfEdge, void, unknown>;

/**
 *
 * @param vertex - Vertex to be iterated
 */
declare function allHalfEdgeOfVertex(vertex: Vertex): Generator<HalfEdge, void, unknown>;

declare namespace Angle {
    export {
        differ,
        normalize
    }
}
export { Angle }

declare namespace Comparator {
    export {
        setTolerance,
        EQ_0,
        EQ,
        GT,
        GE,
        LT,
        LE
    }
}
export { Comparator }

/**
 * Testing a point is in a polygon(`point[]`).
 *
 * @param polygonPointList - An array of the points of a polygon
 * @param point - The point to test
 * @returns The point in the polygon or not
 */
declare function containsPoint(polygonPointList: Array<Point_2>, point: Point_2): boolean;

/**
 * create a Face
 */
declare function createFace(): Face;

/**
 * create a Vertex by x and y coordinate
 *
 * @param x - x coordinate
 * @param y - y coordinate
 */
declare function createVertex(x?: number, y?: number): Vertex;

declare namespace DCEL {
    export {
        Struct,
        Iterator_2 as Iterator,
        createVertex,
        removeVertex,
        link,
        getVertexHalfEdgeList,
        getAngleOfHalfEdge,
        isPathContainsHalfEdge,
        isPathContainsVertex,
        isTwinInSamePath,
        getPathOfHalfEdge,
        isInnerPath,
        isOuterPath,
        splitHalfEdgeByVertex,
        removeHalfEdge,
        getPolygonFromFaceOuter,
        getFaceOfPoint,
        createFace as createGlobalFace,
        queryChildFaceList
    }
}
export { DCEL }

/**
 * Computing difference from source angle to target angle by sepcific direction.
 * Rotation from `source` to `target`.
 *
 * @param source - The source angle in the plane(in radians)
 * @param target - The target angle in the plane(in radians)
 * @param clockwise - clockwise = true `true` is clockwise / `false` is anticlockwise
 * @returns [0, 2*PI)
 */
declare function differ(source: number, target: number, clockwise?: boolean): number;

/**
 * @param aX - The x of point A
 * @param aY - The y of point A
 * @param bX - The x of point B
 * @param bY - The y of point B
 */
declare function dot(aX: number, aY: number, bX: number, bY: number): number;

/**
 * Returns *true* if two values are equal up to DP_TOL
 *
 * @param x - a number
 * @param y - a number
 */
declare function EQ(x: number, y:number): boolean;

/**
 * Returns *true* if value comparable to zero
 *
 * @param x - a number
 */
declare function EQ_0(x: number): boolean;

/**
 * @remarks
 * DCEL::Face
 */
declare class Face {
    	outerComponent: HalfEdge | null;
    	innerComponents: Array<HalfEdge>;
}

/**
 * @param aX - The x of point A
 * @param aY - The y of point A
 * @param bX - The x of point B
 * @param bY - The y of point B
 */
declare function fromSegment(...segment: Segment_2): Line_2;

/**
 * @param fromX - The x of from point
 * @param fromY - The y of from point
 * @param toX  - The x of to point
 * @param toY - The y of to point
 * @returns The vector tuple [x, y]
 */
declare function fromTwoPoint(fromX: number, fromY: number, toX: number, toY: number): Vector_2;

/**
 * Returns *true* if first argument greater than or equal to second argument up to DP_TOL
 *
 * @param x - a number
 * @param y - a number
 */
declare function GE(x: number, y: number): boolean;

/**
 * Computing angle(in radians) of a HalfEdge from its origin.
 *
 * @param halfEdge - A HalfEdge
 * @returns the angle by Math.atan2()
 */
declare function getAngleOfHalfEdge(halfEdge: HalfEdge): number;

/**
 * @param a -
 * @param b -
 */
declare function getDistanceToSegment(a: Point_2, b: Point_2): void;

/**
 * Finding a face containing the point from a context face.
 *
 * @param face - a Face
 * @param point - a Point
 */
declare function getFaceOfPoint(face: Face, Point: Point_2): Face | null;

/**
 * To get the intersection point of segments 'ab' & 'cd'.
 *
 * @param a - a Point
 * @param b - a Point
 * @param c - a Point
 * @param d - a Point
 */
declare function getIntersectionToSegment(a: Point_2, b: Point_2, c: Point_2, d: Point_2): void;

/**
 * @param vector - The vector
 */
declare function getLength(...vector: Vector_2): number;

/**
 * get path by a HalfEdge
 *
 * @param sourceHalfEdge - a HalfEdge
 */
declare function getPathOfHalfEdge(sourceHalfEdge: HalfEdge): Array<HalfEdge>;

/**
 * get the outer polygon of a Face
 *
 * @param face - a Face
 */
declare function getPolygonFromFaceOuter(face: Face): Array<Vertex>;

/**
 * get all HalfEdge by a Vertex
 *
 * @param vertex - which vertex
 */
declare function getVertexHalfEdgeList(vertex: Vertex): Array<HalfEdge>;

/**
 * Returns *true* if first argument greater than second argument up to DP_TOL
 *
 * @param x - a number
 * @param y - a number
 */
declare function GT(x: number, y: number): boolean;

/**
 * @remarks
 * DCEL::HalfEdge
 */
declare class HalfEdge {
    	origin: Vertex | null;
    	twin: HalfEdge | null;
    	previous: HalfEdge | null;
    	next: HalfEdge | null;
    	incidentFace: Face | null;
}

/**
 * @param x1 - The point x of line 1
 * @param y1 - The point y of line 1
 * @param vx1 - The mormal vector x of line 1
 * @param vy1 - The mormal vector y of line 1
 * @param x2 - The point x of line 2
 * @param y2 - The point y of line 2
 * @param vx2 - The mormal vector x of line 2
 * @param vy2 - The mormal vector y of line 2
 */
declare function intersectLine(
	x1: number, y1: number, vx1: number, vy1: number,
	x2: number, y2: number, vx2: number, vy2: number
): Point_3 | null;

/**
 * @param x - The x of vector
 * @param y - The y of vector
 * @returns The inverted vector
 */
declare function invert(...vector: Vector_2): Vector_2;

/**
 * For finding the role of a HalfEdge is inner component or not.
 *
 * @param halfEdge - a HalfEdge
 */
declare function isInnerPath(halfEdge: HalfEdge): boolean;

/**
 * For finding the role of a HalfEdge is outer component or not.
 *
 * @param halfEdge - a HalfEdge
 */
declare function isOuterPath(halfEdge: HalfEdge): boolean;

/**
 * judge targetHalfEdge is in pathHalfEdge or not
 *
 * @param pathHalfEdge - A HalfEdge of the path
 * @param targetHalfEdge - Another HalfEdge for testing
 * @returns The targetHalfEdge is in the path or not
 */
declare function isPathContainsHalfEdge(pathHalfEdge: HalfEdge, targetHalfEdge: HalfEdge): boolean;

/**
 * judge targetVertex is in pathHalfEdge or not
 *
 * @param pathHalfEdge - A HalfEdge of the path
 * @param targetVertex - A vertex for testing
 * @returns The target Vertex is in the path or not
 */
declare function isPathContainsVertex(pathHalfEdge: HalfEdge, targetVertex: Vertex): boolean;

/**
 * Checking if the twin of a HalfEdge is in a same path.
 *
 * @param halfEdge - a HalfEdge
 */
declare function isTwinInSamePath(halfEdge: HalfEdge): boolean;

declare namespace Iterator_2 {
    export {
        allHalfEdgeOfVertex,
        allHalfEdgeOfPath
    }
}

/**
 * Returns *true* if first argument less than or equal to second argument up to DP_TOL
 *
 * @param x - a number
 * @param y - a number
 */
declare function LE(x: number, y: number): boolean;

declare namespace Line {
    export {
        fromSegment,
        toStandard,
        intersectLine
    }
}
export { Line }

declare type Line_2 = [pointX: number, pointY: number, vectorX: number, vectorY: number];

declare type LineStandardTuple = [a: number, b: number, c: number];

/**
 * Linking any 2 `Vertex` with a specific root `Face`.
 *
 * @param fromVertex - origin Vertex
 * @param toVertex - target Vertex
 * @param rootFace - The unique face `.outerComponent` is null
 * @returns A new HalfEdge which `.origin` is `fromVertex`
 */
declare function link(fromVertex: Vertex, toVertex: Vertex, rootFace: Face): HalfEdge;

/**
 * Returns *true* if first argument less than second argument up to DP_TOL
 *
 * @param x - a number
 * @param y - a number
 */
declare function LT(x: number, y: number): boolean;

/**
 * @param scalar - The number to multiply
 * @param x - The x of vector
 * @param y - The y of vector
 * @returns The scaled vector
 */
declare function multiply(scalar: number, ...vector: Vector_2): Vector_2;

/**
 * normalize a angle
 *
 * @param angle - a angle
 * @returns [-PI, PI]
 */
declare function normalize(angle: number): number;

/**
 * @param x - The x of vector
 * @param y - The y of vector
 */
declare function normalize_2(...vector: Vector_2): Vector_2

declare namespace Point {
    export {
        getDistanceToSegment
    }
}
export { Point }

/**
 * @remarks
 * A 2D point.
 */
declare class Point_2 {
    	/**
     	 * @param x - x coordinate
     	 * @param y - y coordinate
     	 */
    	constructor(x: number, y: number);
    	x: number;
    	y: number;
}

declare type Point_3 = [x: number, y: number];

declare namespace Polygon {
    export {
        containsPoint
    }
}
export { Polygon }

/**
 * Queryings all child faces from all inner components of this face.
 *
 * - a. O_O, 1:n
 * - b. _, 1:0
 * - c. O, 1:1
 *
 * @param face - source Face
 * @returns
 */
declare function queryChildFaceList(face: Face): Array<Face>;

/**
 * Updating face and cleaning all references of its and its twin.
 *
 * @param halfEdge - a HalfEdge removed
 */
declare function removeHalfEdge(halfEdge: HalfEdge): void;

/**
 * remove all HalfEdge of this Vertex and itself
 *
 * @param vertex - a Vertex removed
 * @returns this Vertex and its incidentEdge be null
 */
declare function removeVertex(vertex: Vertex): Vertex;

/**
 * @param x - The x of vertex
 * @param y - The y of vertex
 */
declare function rotate90(...vector: Vector_2): Vector_2;

declare namespace Segment {
    export {
        getIntersectionToSegment
    }
}
export { Segment }

declare type Segment_2 = [aX: number, aY: number, bX: number, bY: number];

/**
 * Set new floating point comparison tolerance
 *
 * @param tolerance - a number
 */
declare function setTolerance(tolerance: number);

/**
 * Spliting an existed HalfEdge(with twin) by a speicific vertex.
 * It SHOULD NOT change any ralations between faces.
 *
 * @param halfEdge - an existed HalfEdge
 * @param vertex - a speicific vertex
 * @returns The new from HalfEdge
 */
declare function splitHalfEdgeByVertex(halfEdge: HalfEdge, vertex: Vertex): HalfEdge;

declare namespace Struct {
    export {
        Face,
        Vertex,
        HalfEdge
    }
}

declare function toStandard(...line: Line_2): LineStandardTuple;

declare namespace Vector {
    export {
        fromTwoPoint,
        dot,
        getLength,
        rotate90,
        normalize_2 as normalize,
        multiply,
        invert
    }
}
export { Vector }

declare type Vector_2 = [x: number, y: number];

/**
 * @remarks
 * DCEL::Vertex
 */
declare class Vertex {
    	/**
     	 * @remarks
     	 *
     	 * @param x -
     	 * @param y -
     	 */
    	constructor(x: number, y: number);

    	x: number;
    	y: number;
    	incidentEdge: HalfEdge;
}

export { }
