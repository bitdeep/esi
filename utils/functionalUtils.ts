export type TPropertyExtractor<T> = (t: T) => string | number;

export function groupBy<A>(arr: A[], grouper: TPropertyExtractor<A>) {
  return arr.reduce((obj, element) => {
    const prop = grouper(element);

    if (obj[prop]) {
      obj[prop].push(element);
    } else {
      obj[prop] = [element];
    }

    return obj;
  }, {} as Record<string, [A]>);
}
