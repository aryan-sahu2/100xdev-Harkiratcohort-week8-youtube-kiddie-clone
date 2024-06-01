export function VideoCard(props: any) {
  return (
    <div >
      <img className="rounded" src={props.thumbnail} alt="" />
      <div className="grid pt-2 grid-cols-12">
        <div className="col-span-2">
          <img
            className="rounded-full w-16 h-16  object-cover"
            src={props.logo}
            alt=""
          />
        </div>
        <div className="col-span-10 pl-4">
          <div className="">{props.title}</div>
          <div className=" text-base text-zinc-400">{props.author}</div>
          <div className="text-sm text-zinc-400">{props.views} | Uploaded on {props.timeStamp}</div>
        </div>
      </div>
    </div>
  );
}
